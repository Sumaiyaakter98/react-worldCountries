# 🌍 World Country Explorer

An interactive React application that fetches and displays world countries data using modern React features (like `Suspense` and `use`), allowing users to explore different nations, view their details, and track visited countries.

🔗 **[View Live Site](https://explorecountries-info.netlify.app/)**

## 🚀 Features

* **Data Fetching with React `Suspense` & `use`**: Modern asynchronous data loading in functional React components.
* **Responsive Grid Layout**: Clean and modern CSS Grid & Flexbox layout that adapts to all screen sizes.
* **Country Details**: View flags, common names, population, and land area of various countries.
* **Country Categorization**: Automatically categorizes countries as "Big Country" or "Small Country" based on their area.
* **Visited Tracker**: Interactive buttons to mark countries as "Visited" and keep track of your travel bucket list.
* **UI Effects**: Smooth hover transitions and custom styling for visited states.

---

## 🛠️ Tech Stack

* **Frontend:** React (JSX)
* **Styling:** CSS3 (Grid, Flexbox, Responsive Design)
* **Data Source:** [REST Countries API](https://restcountries.com/) / Programming Hero API

---

## 📁 Project Structure

```text
src/
├── assets/
├── components/
│   ├── Countries/
│   │   ├── Countries.jsx
│   │   └── Countries.css
│   └── Country/
│       ├── Country.jsx
│       └── Country.css
├── App.jsx
├── App.css
├── index.css
└── main.jsx
