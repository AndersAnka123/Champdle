

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
print("Running server on port 8000")
origins = [
    "http://localhost:5173",  # React local dev
    "http://127.0.0.1:3000",
    "https://yourfrontend.com"  # Production frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allows specific frontend domains
    allow_credentials=True,  # Allows cookies/auth tokens
    allow_methods=["*"],  # Allows all HTTP methods (GET, POST, PUT, etc.)
    allow_headers=["*"],  # Allows all headers
)


@app.get("/getNewChamp")
def read_root():
    return {"Test"}






