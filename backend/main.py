import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pymongo import MongoClient

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for dev; restrict later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

MONGO_URI =os.getenv("MONGO_URI", "mongodb://localhost:27017/")
client = MongoClient("mongodb://localhost:27017/")
db = client["portfolioDB"]
reviews_collection = db["reviews"]

class Review(BaseModel):
    text: str



@app.get("/reviews")
def get_reviews():
    reviews = list(reviews_collection.find({}, {"_id": 0}))
    return reviews

@app.post("/reviews")
def add_review(review: Review):
    reviews_collection.insert_one({"text": review.text})
    return {"message": "Review added successfully!"}
