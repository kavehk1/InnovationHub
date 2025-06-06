
# Use an official Python image
FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Copy files
COPY HelloWorld.py /app

# Install FastAPI and Uvicorn
RUN pip install fastapi uvicorn

# Expose the port the app runs on
EXPOSE 8000

# Command to run the app
CMD ["uvicorn", "HelloWorld:app", "--host", "0.0.0.0", "--port", "8000"]
