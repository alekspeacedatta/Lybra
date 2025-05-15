import Text from "../atoms/Text"
const SectionText = (props) => {
  const { children } = props;
  return (
    <div className="text">
        <section>
            <Text tag={props.tag1} text={props.text1} />
            <Text tag={props.tag2} text={props.text2} />
            <Text tag={props.tag3} text={props.text3}/>
        </section>
      {children}
    </div>
  );

}
export default SectionText