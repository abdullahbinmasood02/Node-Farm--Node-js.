# Node Farm Starter Project

## Project Structure

```
starter/
│
├── dev-data/
│   └── data.json              # Product data in JSON format
│
├── modules/
│   └── replaceTemplate.js     # Template replacement utility
│
├── templates/
│   ├── template-card.html     # HTML template for product cards
│   ├── template-overview.html # HTML template for the overview page
│   └── template-product.html  # HTML template for individual product pages
│
├── txt/
│   ├── append.txt
│   ├── final.txt
│   ├── input.txt
│   ├── output.txt
│   ├── read-this.txt
│   └── start.txt
│
└── index.js                   # Main server file
```

## Features

- **Node.js HTTP Server:**  
  Serves dynamic HTML pages without any frameworks.

- **Product Overview Page:**  
  Displays a list of products using data from `dev-data/data.json` and the `template-card.html` template.

- **Product Detail Page:**  
  Shows detailed information for a single product using `template-product.html`. Product selection is based on a query parameter (`/product?id=0`).

- **Template Engine:**  
  Uses a custom template replacement function (`replaceTemplate.js`) to inject product data into HTML templates.

- **API Endpoint:**  
  Provides raw product data as JSON at `/api`.

- **Static Assets:**  
  HTML templates and sample text files are included for demonstration and testing.

## How to Run

1. Ensure you have Node.js installed.
2. Navigate to the `starter` directory.
3. Run the server:
   ```
   node index.js
   ```
4. Open your browser and visit:
   - `http://localhost:8000/` for the overview page
   - `http://localhost:8000/product?id=0` for a product detail page
   - `http://localhost:8000/api` for the API endpoint

## Notes

- No external frameworks or libraries are required.
- The project demonstrates basic server-side rendering and routing in Node.js.
- All templates and data are stored locally.
