module.exports = {
    apps: [
      {
        name: 'Respare Marketplace - Production',
        script: './server/index.js',
        node_args:"--icu-data-dir=node_modules/full-icu",
        error_file: './logs/error.dev.log',
        out_file: './logs/output.dev.log',
        merge_logs: true,
        watch: false,
        env: { NODE_ENV: 'production' },
      },
    ],
  };
  