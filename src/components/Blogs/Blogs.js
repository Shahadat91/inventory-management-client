import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <div>
        <h4>Q-1: Difference between between javascript and node js.</h4>
        <p>
          জাভাস্ক্রিপ্ট হচ্ছে একটি programming language যা ওয়েবসাইটে স্ক্রিপ্ট লেখার জন্য ব্যবহার হয়। জাভাস্ক্রিপ্ট শুধুমাত্র ব্রাউজারে চলতে পারে। সাধারণত জাভাস্ক্রিপ্ট ক্লাইন্ট সাইটে বেশি ব্যবহার করা হয়। জাভাস্ক্রিপ্ট এর মাধ্যমে HTML কোড লিখা সম্ভব। জাভাস্ক্রিপ্ট ফ্রন্টএন্ড ডেভেলপমেন্টে ব্যবহার করা হয়। 
        </p>

        <p>NodeJS হচ্ছে জাভাস্ক্রিপ্ট এর runtime environment। NodeJS এর সাহায্যে ব্রাউজারের বাইরে আমরা জাভাস্ক্রিপ্ট চালাতে পারি। এটি বেশিরভাগ সার্ভার-সাইডে ব্যবহৃত হয়। HTML tag NodeJS এ লিখা সম্ভব হয় না। সার্ভার-সাইড ডেভেলপমেন্টে Nodejs ব্যবহার করা হয়।</p>
      </div>

      <div>
        <h4>Q-2: Differences between SQL and NoSQL databases.</h4>
        <p>
        SQL ডেটাবেসগুলিকে প্রাথমিকভাবে Relational Database (RDBMS) বলা হয়, যেখানে NoSQL ডাটাবেসকে প্রাথমিকভাবে non-relational or distributed ডাটাবেস বলা হয়। SQL databases হচ্ছে table-based অপরদিকে NoSQL databases হচ্ছে key-value pairs, document-based, graph databases অথবা wide-column stores. SQL databases ACID properties (Atomicity, Consistency, Isolation and Durability) ফলো করে যেখানে NoSQL database Brewers CAP theorem (Consistency, Availability and Partition tolerance) ফলো করে। 
        </p>
      </div>
      <div>
        <h4>Q-3: When should you use nodejs and when should you use mongodb? </h4>
        <p>Node js হল একটি ওপেন সোর্স, সার্ভার-সাইড এবং নেটওয়ার্কিং অ্যাপ্লিকেশন তৈরির জন্য ক্রস-প্ল্যাটফর্ম runtime environment। Node.js অ্যাপ্লিকেশনগুলি জাভাস্ক্রিপ্টে লেখা হয়। Node js বিভিন্ন জাভাস্ক্রিপ্ট মডিউলের একটি সমৃদ্ধ লাইব্রেরি প্রদান করে যা Node js ব্যবহার করে ওয়েব অ্যাপ্লিকেশনের development  অনেক সহজ করে।</p>

        <p>Mongodb এমন জায়গায় ব্যবহার করা যেতে পারে যেখানে simple
          queries, easy and fast integration of data আছে এবং যার গঠন সময়ের সাথে সাথে ক্রমাগত পরিবর্তিত হয়।
          উদাহরণ: 
          ১. E-commerce websites
          ২. Mobile applications
          ৩. Blogs and content management portals Storing। 
          
        </p>
      </div>
    </div>
  );
};

export default Blogs;
