from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Permitir peticiones desde el frontend
origins = [
    "http://localhost:3000",
    # puedes agregar otros dominios si es necesario
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # permite estos orígenes
    allow_credentials=True,
    allow_methods=["*"],    # permite GET, POST, etc.
    allow_headers=["*"],    # permite todos los headers
)

@app.get("/hello")
def hello():
    return {"message": "Hola mundo desde Python!"}
