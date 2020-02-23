import React from "react";

export default function Blogs() {
  return (
    <div className="blogs container">
      <div className="row mt-5">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <p>
                <b>Cloud computing</b> is an internet-based computing service in
                which large groups of remote servers are networked to allow
                centralized data storage, and online access to computer services
                or resources.
              </p>
              <p>
                Using cloud computing, organizations can use shared computing
                and storage resources rather than building, operating, and
                improving infrastructure on their own.
              </p>
              <p>
                Cloud computing is a model that enables the following features.
              </p>
              <ul class="list">
                <li>
                  <p>Users can provision and release resources on-demand.</p>
                </li>
                <li>
                  <p>
                    Resources can be scaled up or down automatically, depending
                    on the load.
                  </p>
                </li>
                <li>
                  <p>
                    Resources are accessible over a network with proper
                    security.
                  </p>
                </li>
                <li>
                  <p>
                    Cloud service providers can enable a pay-as-you-go model,
                    where customers are charged based on the type of resources
                    and per usage.
                  </p>
                </li>
              </ul>
              <h2>Types of Clouds</h2>
              <p>
                There are three types of clouds &minus; Public, Private, and
                Hybrid cloud.
              </p>
              <h3>Public Cloud</h3>
              <p>
                In public cloud, the third-party service providers make
                resources and services available to their customers via
                Internet. Customer’s data and related security is with the
                service providers’ owned infrastructure.
              </p>
              <h3>Private Cloud</h3>
              <p>
                A private cloud also provides almost similar features as public
                cloud, but the data and services are managed by the organization
                or by the third party only for the customer’s organization. In
                this type of cloud, major control is over the infrastructure so
                security related issues are minimized.
              </p>
              <h3>Hybrid Cloud</h3>
              <p>
                A hybrid cloud is the combination of both private and public
                cloud. The decision to run on private or public cloud usually
                depends on various parameters like sensitivity of data and
                applications, industry certifications and required standards,
                regulations, etc.
              </p>
              <h2>Cloud Service Models</h2>
              <p>
                There are three types of service models in cloud &minus; IaaS,
                PaaS, and SaaS.
              </p>
              <h3>IaaS</h3>
              <p>
                IaaS stands for <b>Infrastructure as a Service</b>. It provides
                users with the capability to provision processing, storage, and
                network connectivity on demand. Using this service model, the
                customers can develop their own applications on these resources.
              </p>
              <h3>PaaS</h3>
              <p>
                PaaS stands for <b>Platform as a Service</b>. Here, the service
                provider provides various services like databases, queues,
                workflow engines, e-mails, etc. to their customers. The customer
                can then use these components for building their own
                applications. The services, availability of resources and data
                backup are handled by the service provider that helps the
                customers to focus more on their application's functionality.
              </p>
              <h3>SaaS</h3>
              <p>
                SaaS stands for <b>Software as a Service</b>. As the name
                suggests, here the third-party providers provide end-user
                applications to their customers with some administrative
                capability at the application level, such as the ability to
                create and manage their users. Also some level of
                customizability is possible such as the customers can use their
                own corporate logos, colors, etc.
              </p>
              <h2>Advantages of Cloud Computing</h2>
              <p>
                Here is a list of some of the most important advantages that
                Cloud Computing has to offer &minus;
              </p>
              <ul class="list">
                <li>
                  <p>
                    <b>Cost-Efficient</b> &minus; Building our own servers and
                    tools is time-consuming as well as expensive as we need to
                    order, pay for, install, and configure expensive hardware,
                    long before we need it. However, using cloud computing, we
                    only pay for the amount we use and when we use the computing
                    resources. In this manner, cloud computing is cost
                    efficient.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Reliability</b> &minus; A cloud computing platform
                    provides much more managed, reliable and consistent service
                    than an in-house IT infrastructure. It guarantees 24x7 and
                    365 days of service. If any of the server fails, then hosted
                    applications and services can easily be transited to any of
                    the available servers.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Unlimited Storage</b> &minus; Cloud computing provides
                    almost unlimited storage capacity, i.e., we need not worry
                    about running out of storage space or increasing our current
                    storage space availability. We can access as much or as
                    little as we need.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Backup &amp; Recovery</b> &minus; Storing data in the
                    cloud, backing it up and restoring the same is relatively
                    easier than storing it on a physical device. The cloud
                    service providers also have enough technology to recover our
                    data, so there is the convenience of recovering our data
                    anytime.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Easy Access to Information</b> &minus; Once you register
                    yourself in cloud, you can access your account from anywhere
                    in the world provided there is internet connection at that
                    point. There are various storage and security facilities
                    that vary with the account type chosen.
                  </p>
                </li>
              </ul>
              <h2>Disadvantages of Cloud Computing</h2>
              <p>
                Although Cloud Computing provides a wonderful set of advantages,
                it has some drawbacks as well that often raise questions about
                its efficiency.
              </p>
              <h3>Security issues</h3>
              <p>
                Security is the major issue in cloud computing. The cloud
                service providers implement the best security standards and
                industry certifications, however, storing data and important
                files on external service providers always bears a risk.
              </p>
              <p>
                AWS cloud infrastructure is designed to be the most flexible and
                secured cloud network. It provides scalable and highly reliable
                platform that enables customers to deploy applications and data
                quickly and securely.
              </p>
              <h6>
                credited by :
                <a href="https://www.tutorialspoint.com/amazon_web_services/amazon_web_services_cloud_computing.htm">
                  tutorialspoint
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
