# 1. Imagen base
FROM python:3.14-slim

# 2. Directorio de trabajo
WORKDIR /app

# 3. Copiar dependencias
COPY requirements.txt .

# 4. Instalar dependencias de requirements y que no use ni guarde archivos en la caché local.
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copiar el resto del código, all de la carpeta actual de la maquina hacia el workdir
COPY . .

# 6. Comando por defecto para correr la app
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]


