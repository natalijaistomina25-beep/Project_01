import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { NavLink } from "react-router-dom";

interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export default function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  // Загружаем все категории при монтировании
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    }
    fetchCategories();
  }, []);

  // Функция для добавления новой категории через API
  const addCategory = async (values: { name: string; image: string }) => {
    if (!values.name || !values.image) return;

    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          image: values.image,
          slug: values.name.toLowerCase().replace(/\s/g, "-"),
        }),
      });
      const newCategory = await res.json();
      setCategories([...categories, newCategory]);
    } catch (error) {
      console.error("Failed to add category:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Categories</h1>

      <Formik
        initialValues={{ name: "", image: "" }}
        onSubmit={(values, actions) => {
          addCategory(values);
          actions.resetForm();
        }}
      >
        <Form style={{ marginBottom: "30px" }}>
          <Field
            name="name"
            placeholder="Category Name"
            style={{ marginRight: "10px", padding: "5px" }}
          />
          <Field
            name="image"
            placeholder="Image URL"
            style={{ marginRight: "10px", padding: "5px" }}
          />
          <button type="submit" style={{ padding: "5px 10px" }}>Add Category</button>
        </Form>
      </Formik>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((cat) => (
          <li
            key={cat.id}
            style={{
              marginBottom: "20px",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={cat.image}
              alt={cat.name}
              style={{ width: "100px", height: "auto", marginRight: "20px", borderRadius: "4px" }}
            />
            <h3 style={{ margin: 0 }}>{cat.name}</h3>
          </li>
        ))}
      </ul>

      <NavLink to="/" style={{ display: "inline-block", marginTop: "20px" }}>
        Back to Home
      </NavLink>
    </div>
  );
}