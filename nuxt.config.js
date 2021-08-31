export default {
  target: 'static',
  ssr: true

  // // For deploying at Github Pages without a CNAME
  // router: {
  //   base: process.env.NODE_ENV === 'production' ? '/emrinangelov.com/' : '/'
  // },

  // // DEV MODE with HMR on Docker:
  // // 1. Delete node_modules (and maybe yarn.lock) because Linux
  // // docker run -dp 3000:3000 -w /app -v "$(pwd):/app" --env HOST=0.0.0.0
  // // --env PORT=3000 node:alpine sh -c "yarn install && yarn dev"
  // // And have this set to fix HMR.
  // watchers: {
  //   webpack: {
  //     aggregateTimeout: 300,
  //     poll: 1000
  //   }
  // },

  // // PROD MODE on K8S:
  // // 1. Build a prod image with Dockerfile (and dockerignore)
  // // 2. Create a YAML file for its deployment and service
  // // 3. kubectl apply -f frontend.yaml
}
