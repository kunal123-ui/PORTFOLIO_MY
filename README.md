# PORTFOLIO_MY

# Kunal M. - Portfolio

A production-quality developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion. This project demonstrates Full Stack development with a functional Admin dashboard using `localStorage`, and comprehensive DevOps practices including Docker containerization, Nginx configuration, Kubernetes deployment, and a GitHub Actions CI/CD pipeline.

## 🚀 Features
- **3 Domains Showcase**: Frontend, Full Stack, DevOps.
- **Admin Dashboard**: Full CRUD for Projects, Skills, Experience, Education, and Messages.
- **Data Persistence**: Uses `localStorage` with JSON export/import/backup.
- **Dark Mode**: Persisted theme preferences.
- **Containerized**: Multi-stage Docker build.
- **Kubernetes Ready**: Complete manifests with health probes and resource limits.
- **CI/CD Pipeline**: GitHub Actions for lint, build, Docker publish, and K8s rolling updates.

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🐳 Docker Deployment

The application is containerized using a multi-stage Dockerfile that builds the React application and serves it via Nginx (with SPA routing configuration).

```bash
# Build the Docker image
docker build -t kunal-portfolio:latest .

# Run the Docker container locally
docker run -p 8080:80 kunal-portfolio:latest
```
Access the site at `http://localhost:8080`.

## ☸️ Kubernetes Deployment

The `k8s/` directory contains all necessary manifests to deploy this application to a Kubernetes cluster.

### Apply Manifests

```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/configmap.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/ingress.yaml
```

### Useful K8s Commands

```bash
# Check pod status
kubectl get pods -n portfolio

# Check services and ingress
kubectl get svc,ingress -n portfolio

# View logs
kubectl logs -f deployment/portfolio -n portfolio
```

### Rollbacks

If a deployment fails or you need to revert to a previous version, use these rollback commands:

```bash
# View rollout history
kubectl rollout history deployment/portfolio -n portfolio

# Undo the last deployment (Rollback)
kubectl rollout undo deployment/portfolio -n portfolio

# Rollback to a specific revision
kubectl rollout undo deployment/portfolio -n portfolio --to-revision=2
```

## 🔄 CI/CD Configuration

The `.github/workflows/deploy.yml` pipeline automates testing and deployment.
To use it, configure the following secrets in your GitHub repository:
- `DOCKER_USERNAME`: Your Docker Hub username.
- `DOCKER_PASSWORD`: Your Docker Hub password or access token.
- `KUBE_CONFIG`: The base64 encoded kubeconfig file for your cluster.

The pipeline tags Docker images with the Git commit SHA for reliable rollbacks.
