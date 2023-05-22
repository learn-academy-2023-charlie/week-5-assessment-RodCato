# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: Calling super in Ruby calls the parent class method in the child class

Researched answer: Calling super in a class will invoke the same method name in the superclass of the current class. This means that if a subclass has a method with the same name as a method in the superclass, calling super within the subclass will execute the method in the superclass.

2. What is a gem?

Your answer: A gem is a package manager that is used to build applications in Ruby.

Researched answer: A gem is a package or library of code that can be easily installed and used in a Ruby application, essentially they are collections of reusable code that can help developers save time and effort by providing pre-built functionality that can be easily integrated into their own projects.

3. What is a relational database? Are there other kinds of databases?

Your answer: A database that organizes data in rows and columns. Im not sure of other database types.

Researched answer: Relational database is a type of database management system (DBMS) that organizes data into tables with predefined relationships between them. It uses Structured Query Language (SQL) to manipulate and retrieve data. other types of databases include the following: NoSQL databases, including document databases, key-value stores, graph databases, columnar databases, and in-memory databases, are non-relational database systems that offer flexible schema designs and alternative data models to SQL-based relational databases. Document databases store and retrieve data in a document format, ideal for hierarchical or nested data. Key-value stores use unique keys to associate data, simplifying basic retrieval but lacking advanced querying. Graph databases represent data as nodes, edges, and properties, optimizing handling of interconnected data and complex relationships. Columnar databases store data in columns for efficient querying of large datasets, while in-memory databases prioritize fast data access by storing data primarily in memory.

4. What are primary keys? Why purpose does a primary key serve?

Your answer: A primary key is a unique identifier for a particular row of data in a database. It is used to identify data in the database.

Researched answer:  A primary key is a unique identifier for each record in a database table. It serves the purpose of uniquely identifying each record and ensuring that there are no duplicate records in the table which is important for maintaining data integrity and for enabling efficient queries and updates to the data.

5. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: Get, post, put, patch, delete. Each corresponds to the following CRUD actions: 
Create = Post 
Read = Get
Update = Put and Patch
Delete = Delete

Researched answer: 
GET: is used to retrieve information or data from a resource. In CRUD terms, this corresponds to the "Read" operation.
POST: is used to submit new information or data to a resource. In CRUD terms, this corresponds to the "Create" operation.
PUT: is used to update existing information or data on a resource. In CRUD terms, this corresponds to the "Update" operation.
DELETE: is used to remove information or data from a resource. In CRUD terms, this corresponds to the "Delete" operation.
PATCH: is used to partially update existing information or data on a resource. This is a newer addition to the HTTP verbs and doesn't have a direct correspondence to a CRUD operation, but it is often used in place of PUT when only a portion of a resource needs to be updated.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: are rules and conditions that are applied to the data being stored in a model. These validations ensure that the data meets specific requirements or constraints before it is saved to the database. Model validations help maintain data integrity and enforce business rules by preventing the creation or modification of invalid or inconsistent records.

2. RESTful routes: RESTful routes are an attempt to bring the operations that can be applied to an object into HTTP requests.

3. ERB: Embedded Ruby, a templating language used in Rails views to embed Ruby code. ERB allows you to embed Ruby code within HTML or other text-based templates.

4. Params: A hash that stores parameters passed from the user in the request. These parameters typically include form inputs, URL parameters, and other data sent from the client to the server.

5. API: Application Programming Interface is a set of rules and protocols that allows different software applications to communicate and interact with each other. APIs define the methods and data formats that applications can use to request and exchange information.
