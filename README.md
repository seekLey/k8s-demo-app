# k8s-demo

A simple Node.js application with Kubernetes deployment manifests for learning and demonstration purposes.

## Structure

- `app/` - Node.js application
- `Dockerfile` - Containerization instructions
- `k8s/` - Kubernetes manifests (deployment, service, configmap, secret, pvc, hpa)

## Usage

1. Build Docker image:
   ```sh
   docker build -t k8s-demo:latest .
   ```
2. Run locally:
   ```sh
   cd app && npm install && npm start
   ```
3. Deploy to Kubernetes:
   ```sh
   kubectl apply -f k8s/
   ```

Replace secrets and config values as needed for your environment.
