#!/usr/bin/env python3
"""Module that updates topics of a school"""


def update_topics(mongo_collection, name, topics):
    """Update topics based on school name"""
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}})
