res.render() Method
The res.render() method is used for server-side rendering of views. It takes a view template (e.g., an EJS, Pug, or Handlebars file) and combines it with provided data to generate an HTML string. This HTML string is then sent as the response to the client.

res.render(view [, locals] [, callback]);
view: The path to the view template file to be rendered.
locals (optional): An object containing data that will be passed to the view template for dynamic content generation. 
callback (optional): A function that executes after the view has been rendered. It receives err (if an error occurred) and renderedHtml as arguments. If a callback is not provided, Express automatically sends the rendered HTML to the client. 
Example:
JavaScript

app.set('view engine', 'ejs'); // Assuming EJS is configured as the view engine

app.get('/', (req, res) => {
  res.render('index', { title: 'My Express App', message: 'Welcome!' });
});
res.send() Method
The res.send() method is a versatile method used to send various types of responses to the client, including strings, buffers, objects, or arrays. It automatically sets the Content-Type header based on the type of data being sent.
Syntax:
JavaScript

res.send([body]);
body (optional): The data to be sent as the response. This can be a String, Buffer, Object, or Array.
Example:
JavaScript

app.get('/text', (req, res) => {
  res.send('Hello, this is a plain text response.');
});

app.get('/json', (req, res) => {
  res.send({ name: 'John Doe', age: 30 }); // Sends JSON
});
Key Differences:
Purpose:
res.render() is specifically for rendering dynamic HTML views using a template engine, while res.send() is for sending raw data (text, JSON, etc.).
Content-Type:
res.render() typically sends text/html, whereas res.send() infers the Content-Type based on the data provided (e.g., application/json for objects/arrays, text/plain for strings).
Template Engines:
res.render() requires a configured template engine, while res.send() does not.


In Express.js, the res.redirect() method is used to send an HTTP redirect to the client, instructing it to navigate to a different URL. This method is part of the response object (res) and is commonly used for various web development scenarios, such as: 
Page Relocation: When a web page has moved to a new URL.
Post-Form Submission: Redirecting the user to a different page after a successful form submission.
User Experience Flow: Guiding users through a specific sequence of pages or processes.
Basic Usage:
The res.redirect() method takes a URL as its primary argument.
JavaScript

app.get('/old-path', (req, res) => {
  res.redirect('/new-path'); // Redirects to a relative path within the same domain
});

app.get('/external-redirect', (req, res) => {
  res.redirect('https://www.example.com/'); // Redirects to an external URL
});
Specifying HTTP Status Codes:
By default, res.redirect() sends an HTTP 302 (Found) status code, which indicates a temporary redirect. To specify a different status code, such as a 301 (Moved Permanently) for search engine optimization purposes, you can pass it as the first argument:
JavaScript

app.get('/old-permanent-path', (req, res) => {
  res.redirect(301, '/new-permanent-path'); // Sends a 301 Moved Permanently redirect
});
Redirecting Back:
You can redirect the user back to the previous URL using the 'back' keyword, which relies on the Referer (or Referrer) HTTP header. If the header is not present, it defaults to redirecting to the root path (/).
JavaScript

app.get('/process-data', (req, res) => {
  // Process data...
  res.redirect('back'); // Redirects to the URL from which the request originated
});
Important Considerations:
res.redirect() is a terminal method, meaning it should generally be the last line of code executed for a given request, as it sends the response to the client.
While res.redirect() handles redirection for most HTTP requests, redirecting to a different HTTP method (e.g., redirecting a GET to a POST) is generally not possible directly with standard HTTP redirects and requires alternative approaches like client-side JavaScript or specific HTTP status codes like 307 (Temporary Redirect) for POST to POST redirects.