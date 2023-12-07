import React from 'react'
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom'
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();

  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
    "Mystery",
    "Fantasy",
    "Romance",
    "Biography",
    "History",
    "Self-Help",
    "Cooking",
    "Science",
    "Technology",
    "Business",
    "Travel",
    "Poetry",
    "Children's",
    "Young Adult",
    "Thriller",
    "Horror",
    "Comic Books",
    "Graphic Novels",
    "Memoir",
    "Classic Literature",
    "Philosophy",
    "Religion",
    "Art",
    "Music",
    "Sports",
    "Health",
    "Humour",
  ];

  const [selectedBookCategory, setSelectBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (e) => {
    setSelectBookCategory(e.target.value);
  };

  // Handle Book Submission
  const handleUpdate = (e) => {
    e.preventDefault();
    const form  = e.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }

    // Update book
    fetch(`http://localhost:3000/book/${id}`,{
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data => {
      alert("Book Updated Successfully!")
    })
  
  }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Update The Book</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* First Row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              placeholder="Book Name"
              defaultValue={bookTitle}
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              placeholder="Author's Name"
              defaultValue={authorName}
              required
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-8">
          {/* Author Name */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Image URL" />
            </div>
            <TextInput
              id="imageURL"
              type="url"
              placeholder="Book Image URL"
              defaultValue={imageURL}
              required
            />
          </div>

          {/* Category */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>

            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            type="text"
            name="bookDescription"
            placeholder="Write your book description......"
            className="w-full"
            defaultValue={bookDescription}
            required
            rows={4}
          />
        </div>

        {/* Book pdf Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            type="url"
            placeholder="Enter Book PDF URL"
            defaultValue={bookPDFURL}
            required
          />
        </div>

        <Button type="submit" className="mt-5">Update</Button>
      </form>
    </div>
  );
}

export default EditBooks