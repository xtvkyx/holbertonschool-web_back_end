#!/usr/bin/env python3
"""Module that lists all documents in a collection"""


def list_all(mongo_collection):
    """Return list of all documents in a collection"""
    return list(mongo_collection.find())
