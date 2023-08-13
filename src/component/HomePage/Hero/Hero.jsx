import './Hero.css';

export default function Startup() {
  return (
    <>
      <div className="container h-50">
        <div className="row">
          <div className="col-sm-6 hero-container pt-4 p-2">
            <div>
              <h1 className="heading-1 p-2  text-wrap">
                Enhance Your Customer Service with a Personalized HelpBot!
              </h1>

              <h4 className="p-2 pb-3 lh-sm text-wrap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis blanditiis deleniti rerum animi sed provident deserunt
                temporibus distinctio labore quo aspernatur porro alias tempore
                incidunt, fugiat, facere repudiandae eum praesentium! Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac
                lorem nibh.
              </h4>
              <div className="startup p-2">
                <button className="active">Build your Chatbot</button>
                <button className="inactive shadow">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
