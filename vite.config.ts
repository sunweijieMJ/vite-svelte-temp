import { defineConfig, loadEnv } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import viteCompression from 'vite-plugin-compression';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';

const port = 9000;
const timeStamp = Date.now();

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }): unknown => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    return defineConfig({
        plugins: [
            svelte({
                preprocess: sveltePreprocess()
            }),
            viteCompression({
                verbose: true,
                disable: false,
                threshold: 1024 * 10,
                algorithm: 'gzip',
                ext: '.gz'
            })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/_base.scss" as *;'
                }
            }
        },
        server: {
            host: 'localhost',
            port,
            strictPort: true,
            https: false,
            proxy: {
                '^/(userDomain|masterdataDomain|taskDomain)': {
                    target: 'http://dev.backendapi.aid.connext.net.cn/' // 开发
                // target: 'http://test.backendapi.aid.connext.net.cn/' // 测试
                }
            }
        },
        build: {
            assetsDir: 'static/assets',
            rollupOptions: {
                output: {
                    entryFileNames: `static/js/[name].${process.env.VITE_Version}.t${timeStamp}.js`,
                    chunkFileNames: `static/js/[name].${process.env.VITE_Version}.t${timeStamp}.js`,
                    assetFileNames: `static/js/[name].${process.env.VITE_Version}.t${timeStamp}.[ext]`,
                    manualChunks(id) {
                        const chunkMap = new Map();
                        chunkMap.set(/[\\/]src[\\/]layout[\\/]/.test(id), 'basicLayout');
                        chunkMap.set(/[\\/]src[\\/]components[\\/]/.test(id), 'basicComponent');
                        chunkMap.set(/[\\/]node_modules[\\/]/.test(id), 'vendors');
                        chunkMap.set(/[\\/]node_modules[\\/]echarts[\\/]/.test(id), 'echarts');
                        chunkMap.set(/[\\/]node_modules[\\/]lodash[\\/]/.test(id), 'lodash');
                        chunkMap.set(/[\\/]node_modules[\\/]dayjs[\\/]/.test(id), 'dayjs');
                        chunkMap.set(/[\\/]node_modules[\\/]xlsx[\\/]xlsx.js/.test(id), 'xlsxIndex');
                        chunkMap.set(/[\\/]node_modules[\\/]xlsx[\\/](?!(xlsx.js))/.test(id), 'xlsx');
                        if (chunkMap.get(true)) return chunkMap.get(true);
                        return null;
                    }
                }
            }
        }
    });
};
