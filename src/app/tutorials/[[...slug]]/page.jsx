import React from "react";

const TutorialPage = async ({ params }) => {
 
  const { slug } = await params 

  const [technology, topic, page_no, subject] = slug || []

  return (
    <div>
      <h1>{technology} Tutorials</h1>
      <h2>{topic} </h2>
      <hr />
      <div className="flex justify-between">
        <h2 className="font-bold">{subject}</h2>
        <p>page no : {page_no}</p>
      </div>
    </div>
  );
};

export default TutorialPage;
