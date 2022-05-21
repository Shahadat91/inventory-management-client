import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <div>
        <h4>Q-1: Difference between javascript and node js.</h4>
        <p>
          Javascript is a programming language that is used for writing scripts
          on the website. Javascript can only be run in the browsers.It is
          basically used on the client-side.Javascript is capable enough to add
          HTML and play with the DOM.Javascript is used in frontend development.
        </p>
        <p>
          NodeJS is a Javascript runtime environment.We can run Javascript
          outside the browser with the help of NodeJS.It is mostly used on the
          server-side.Nodejs does not have capability to add HTML tags.Nodejs is
          used in server-side development.
        </p>
      </div>
      <div>
        <h4>Q-2: Differences between sql and nosql databases.</h4>
        <p>
          SQL databases are primarily called as Relational Databases (RDBMS);
          whereas NoSQL database are primarily called as non-relational or
          distributed database. SQL databases defines and manipulates data based
          structured query language (SQL). Seeing from a side this language is
          extremely powerful. SQL is one of the most versatile and widely-used
          options available which makes it a safe choice especially for great
          complex queries. But from other side it can be restrictive. SQL
          requires you to use predefined schemas to determine the structure of
          your data before you work with it. Also all of your data must follow
          the same structure. This can require significant up-front preparation
          which means that a change in the structure would be both difficult and
          disruptive to your whole system. A NoSQL database has dynamic schema
          for unstructured data. Data is stored in many ways which means it can
          be document-oriented, column-oriented, graph-based or organized as a
          KeyValue store. This flexibility means that documents can be created
          without having defined structure first. Also each document can have
          its own unique structure. The syntax varies from database to database,
          and you can add fields as you go.In almost all situations SQL
          databases are vertically scalable. This means that you can increase
          the load on a single server by increasing things like RAM, CPU or SSD.
          But on the other hand NoSQL databases are horizontally scalable. This
          means that you handle more traffic by sharding, or adding more servers
          in your NoSQL database. It is similar to adding more floors to the
          same building versus adding more buildings to the neighborhood. Thus
          NoSQL can ultimately become larger and more powerful, making these
          databases the preferred choice for large or ever-changing data sets.
          SQL databases are table-based on the other hand NoSQL databases are
          either key-value pairs, document-based, graph databases or wide-column
          stores. This makes relational SQL databases a better option for
          applications that require multi-row transactions such as an accounting
          system or for legacy systems that were built for a relational
          structure. SQL databases follow ACID properties (Atomicity,
          Consistency, Isolation and Durability) whereas the NoSQL database
          follows the Brewers CAP theorem (Consistency, Availability and
          Partition tolerance).Great support is available for all SQL database
          from their vendors. Also a lot of independent consultations are there
          who can help you with SQL database for a very large scale deployments
          but for some NoSQL database you still have to rely on community
          support and only limited outside experts are available for setting up
          and deploying your large scale NoSQL deployments. Some examples of SQL
          databases include PostgreSQL, MySQL, Oracle and Microsoft SQL Server.
          NoSQL database examples include Redis, RavenDB Cassandra, MongoDB,
          BigTable, HBase, Neo4j and CouchDB.
        </p>
      </div>
      <div>
        <h4>Q-3: When should you use `nodejs` and when should you use `mongodb` </h4>
        <p>
          When to use MongoDB? MongoDB can be used in places that require simple
          queries, easy and fast integration of data and have data whose
          structure changes constantly with time. Examples: 
          E-commerce websites
          Mobile applications
           Blogs and content management portals Storing
          geospatial data
        </p>
      </div>
    </div>
  );
};

export default Blogs;
