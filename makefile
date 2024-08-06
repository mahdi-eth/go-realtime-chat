# Variables
BACKEND_IMAGE = backend
BACKEND_CONTAINER = my-backend-container
FRONTEND_CONTAINER = my-frontend-container
BACKEND_PORT = 8080
FRONTEND_PORT = 3000

# Default target
all: build

# Build the backend Docker image
build-backend:
	@echo "Building backend Docker image..."
	cd server && docker build -t $(BACKEND_IMAGE) . && cd ..

# Run the backend Docker container
run-backend: build-backend
	@echo "Running backend Docker container..."
	cd server && docker run -d -p $(BACKEND_PORT):8080 --name $(BACKEND_CONTAINER) $(BACKEND_IMAGE) && cd ..

# Run the frontend using npm
run-frontend:
	@echo "Running frontend with npm..."
	cd view && npm install && npm start && cd ..

# Stop the backend Docker container
stop-backend:
	@echo "Stopping backend Docker container..."
	cd server && docker stop $(BACKEND_CONTAINER) || true && cd ..

# Remove the backend Docker container
clean-backend-container: stop-backend
	@echo "Removing backend Docker container..."
	cd server && docker rm $(BACKEND_CONTAINER) || true && cd ..

# Remove the backend Docker image
clean-backend-image:
	@echo "Removing backend Docker image..."
	cd server && docker rmi $(BACKEND_IMAGE) || true && cd ..

# Clean both container and image for backend
clean-backend: clean-backend-container clean-backend-image

# Tail logs from the backend container
logs-backend:
	@echo "Tailing logs from backend Docker container..."
	cd server && docker logs -f $(BACKEND_CONTAINER) && cd ..

# Help
help:
	@echo "Makefile Usage:"
	@echo "  make build-backend          - Build the backend Docker image"
	@echo "  make run-backend            - Run the backend Docker container"
	@echo "  make run-frontend           - Run the frontend using npm"
	@echo "  make stop-backend           - Stop the backend Docker container"
	@echo "  make clean-backend-container- Remove the backend Docker container"
	@echo "  make clean-backend-image    - Remove the backend Docker image"
	@echo "  make clean-backend          - Remove both container and image for backend"
	@echo "  make logs-backend           - Tail logs from the backend Docker container"

.PHONY: all build-backend run-backend run-frontend stop-backend clean-backend-container clean-backend-image clean-backend logs-backend help
