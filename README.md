# HNG 12 Backend Task 0

This is a task for HNG 12 internship. This project is a public API that returns the following information in JSON format:
- My email address (olumideolubosede@gmail.com)
- The current datetime as an ISO 8601 formatted timestamp.
- The GitHub URL of the project's codebase: [https://github.com/LordOlumide/hng_12_backend_task_0](https://github.com/LordOlumide/hng_12_backend_task_0)

The project is built using Node/Express.js.

## Setup instructions (e.g., how to run the project locally).
- Clone the project from Github to your local machine.
- Ensure you have npm installed correctly.
- cd into the project directory in terminal and run the command `npm install`.
- After all dependencies are installed, run the command `node index.js`.

## API documentation
Endpoint URL: https://hng-12-backend-task-0.vercel.app/


Example GET request: `curl https://hng-12-backend-task-0.vercel.app/`

Response:
```
StatusCode        : 200
StatusDescription : OK
Content           : {"email":"olumideolubosede@gmail.com","timestamp":"2025-01-29T20:38:41.638Z","github_url":"https://
                    github.com/LordOlumide/hng_12_backend_task_0"}
RawContent        : HTTP/1.1 200 OK
                    Access-Control-Allow-Origin: *
                    Age: 0
                    Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
                    X-Vercel-Cache: MISS
                    X-Vercel-Id: cpt1::iad1::dlp2t-1738183120976-6df...
Forms             : {}
Headers           : {[Access-Control-Allow-Origin, *], [Age, 0], [Strict-Transport-Security, max-age=63072000;
                    includeSubDomains; preload], [X-Vercel-Cache, MISS]...}
...
```

To hire nodejs developers, visit https://hng.tech/hire/nodejs-developers.

