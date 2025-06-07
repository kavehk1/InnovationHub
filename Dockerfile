# Use official Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy application files
COPY main.py .

# Install FastAPI and Uvicorn
RUN pip install fastapi uvicorn

# Expose port (FastAPI default)
EXPOSE 8000

# Command to run the FastAPI app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
