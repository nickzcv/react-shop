function Support({ paddingClass = null }) {
  return (
    <section className={'support-area ' + paddingClass}>
      <div className="container-fluid">
        <div className="support-inner-box">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-support">
                <span className="icon ecoToys"></span>
                <div className="support-content">
                  <h3>Развивающие игрушки для творчества в Украине</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-support">
                <span className="icon ecoHouse"></span>
                <div className="support-content">
                  <h3>Натуральное дерево: береза, ольха</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-support">
                <span className="icon ecoPaint"></span>
                <div className="support-content">
                  <h3>Гипоаллергенные эко краски для игрушек из Италии</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-support">
                <span className="icon belarus"></span>
                <div className="support-content">
                  <h3>Производство в Беларуси</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Support;
