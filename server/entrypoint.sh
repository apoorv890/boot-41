#!/bin/sh

# Apply database migrations
echo "Applying database migrations..."
python3 manage.py migrate

# Start server
echo "Starting server..."
python3 manage.py runserver 0.0.0.0:5000
