module.exports = {
  apps: [
    {
      name: 'Respare Marketplace - Development',
      script: './server/index.js',
      node_args: '--icu-data-dir=node_modules/full-icu',
      error_file: './logs/error.dev.log',
      out_file: './logs/output.dev.log',
      merge_logs: true,
      watch: false,
      env: { NODE_ENV: 'development' },
    },
  ],
};
