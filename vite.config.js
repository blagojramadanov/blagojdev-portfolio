export default {
  base: "/",
  build: {
    rollupOptions: {
      input: {
        index: "./index.html",
        impressum: "./impressum.html",
      },
    },
  },
};
