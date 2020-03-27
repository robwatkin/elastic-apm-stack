import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withTransaction } from '@elastic/apm-rum-react';

import './Car.css';

function Car() {

  const [hasError, setErrors] = useState(false);
  const [cars, setCars] = useState({car: "none"});


  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'http://localhost:4000/vehicle',
      );
      console.log("result", result);
      setCars(result.data);
    }
    fetchData();
  }, []);

  console.log("Car render...");

  return (
    <div className="Car">
        <span>{JSON.stringify(cars)}</span>
        <hr />
        <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
}

export default withTransaction('Car', 'component')(Car)

// export default Car;
