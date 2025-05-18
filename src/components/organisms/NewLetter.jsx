import Text from "../atoms/Text"
import Input from "../atoms/Input"
import Button from "../atoms/Button"
const NewLetter = () => {
  return (
    <div className="newsletter" id="newsletter">
      <div className="newsletter-content section-content">
        <Text tag="h2" text="Subscribe to our newsletter" />
        <div className="input">
          <Input placeholder="freebies@sales.com" />
          <Button buttonClass="contact-button" buttonText="subscribe" />
        </div>
      </div>
    </div>
  );
}
export default NewLetter