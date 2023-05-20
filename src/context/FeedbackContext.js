import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  useEffect(() => {
    fetchFeedback();
  }, []);
  const [isLoading, setisLoading] = useState(true);
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "this is feedback for item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "this is feedback for item 2",
      rating: 5,
    },
    {
      id: 3,
      text: "this is feedback for item 3",
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id))
    }

  };
  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    // newFeedback.id = uuidv4();
    setFeedback([data, ...feedback]);
  };

  const updateFeedback = async (id, upitem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upitem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };
  //       setFeedback(feedback.map((item)=>(item.id===id)? {...item,...upitem}:item))
  //     };
  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };
  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&order=desc`
    );
    const data = await response.json();
    setFeedback(data);
    setisLoading(false);
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;