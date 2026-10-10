FROM node:22-bookworm-slim AS ui
WORKDIR /build
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
RUN npm run build
FROM python:3.11-slim
WORKDIR /app
COPY backend/requirements.txt /app/backend/requirements.txt
RUN pip install --no-cache-dir -r backend/requirements.txt
COPY backend/ backend/
COPY configs/ configs/
COPY simulation/ simulation/
COPY models/ models/
COPY --from=ui /build/dist frontend/dist
RUN mkdir -p data && useradd -m visionbot && chown -R visionbot:visionbot /app
USER visionbot
ENV PYTHONPATH=/app/backend
EXPOSE 8000
CMD ["python","-m","uvicorn","app.main:app","--host","0.0.0.0","--port","8000"]
