// Qdrant Cloud is a managed service, so you don’t have to worry about running the Qdrant container yourself.
// Dev: Run Qdrant locally in a Docker container for development usung the official Qdrant Docker image. No Docker management is needed on your part.
// Prod: Use Qdrant Cloud as vector store, via an endpoint (URL & API key) to be used in backend to communicate with Qdrant.
// Your frontend remains the same, but it will send requests to your backend, which will interact with Qdrant Cloud.

// docker run -p 6333:6333 qdrant/qdrant
