const fetchApi = async () => {
  try {
    const getRandomData = () => Math.random() * 10;
    const data = {
      x: getRandomData(),
      y: getRandomData(),
      z: getRandomData(),
    };
    const response = await fetch("http://localhost:5000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

setInterval(fetchApi, 1000);
