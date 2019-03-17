const Instructions = ({ title, steps }) => (
  <section>
    <h2>{title}</h2>
    {steps.map((step, index) => (
      <p key={`step_${index}`}>{step}</p>
    ))}
  </section>
);

export default Instructions;
