import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MONGO_URI = os.getenv("MONGO_URI", "mongodb://mongodb:27017/mydb")

client = MongoClient(MONGO_URI)
db = client["mydb"] # same db name as in MONGO_URL
reviews_collection = db["reviews"]

class Review(BaseModel):
    text: str

@app.get("/reviews")
def get_reviews():
    return list(reviews_collection.find({}, {"_id": 0}))

@app.post("/reviews")
def add_review(review: Review):
    reviews_collection.insert_one({"text": review.text})
    return {"message": "Review added successfully!"}
