# AWS Project - User Communication(serveless)

![image](https://github.com/Clinton-dev/aws-serverless-project/assets/30356189/d99250c5-9f00-4f6b-8884-7bda05303c8a)


[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Welcome to the User Communication project! This repository contains the source code and configuration files for an AWS project that enables personalized user communication via email or SMS.

## Overview

The User Communication project leverages various AWS services to provide a seamless communication experience for users. Depending on their preference, users can receive personalized messages through either email or SMS. The project is built using the following AWS services:

- **Lambda Functions:** Three Lambda functions are employed to handle different aspects of the project:
  - Email Lambda: Responsible for sending customized emails to users.
  - SMS Lambda: Sends personalized text messages to users.
  - REST API Handler: Manages requests from the web interface.

- **Step Functions:** Orchestrates the logic flow of the project, directing the appropriate action based on the user's chosen communication method.

- **API Gateway:** Provides a user-friendly interface by bridging the web interface and AWS services. It ensures smooth communication and request handling.

- **S3 Bucket:** Stores and retrieves data efficiently, enabling seamless integration with other services.

- **SNS (Simple Notification Service):** Enables the sending of SMS messages to users.

- **SES (Simple Email Service):** Facilitates the delivery of personalized emails.

## Getting Started

To get started with the User Communication project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/user-communication.git`
2. Set up the necessary AWS resources:
   - Create an S3 bucket to store user data.
   - Configure SNS and SES for SMS and email delivery, respectively.
   - Set up the necessary IAM roles and permissions for Lambda functions.
   - Create a Step Functions state machine to orchestrate the logic flow.

3. Update the Lambda function code with your specific logic and credentials.
4. Deploy the Lambda functions, API Gateway, and Step Functions.
5. Configure the API Gateway endpoints in your web interface.
To get started with the User Communication project and view the site locally using the Live Server extension in Visual Studio Code, 
6. Start the Live Server:
    1. Open Visual Studio Code (VSCode) and navigate to the project directory.
    2. Install the Live Server extension if you haven't already done so.
    3. Right-click on the index.html or main HTML file of your project.
    4. Select the "Open with Live Server" option from the context menu.
    Live Server will automatically launch a local server and open the site in your default browser.
7. View the site in your browser:
  The site will open in a new tab or window in your default browser.
  If it doesn't automatically open, you can manually access it by entering the URL displayed in the Live Server output in the VSCode terminal.

## Usage

To use the User Communication project, follow these steps:

1. Make a request to the appropriate API Gateway endpoint, providing the necessary parameters (e.g., recipient information, message content, preferred communication method).
2. The REST API Handler Lambda function will receive the request and initiate the corresponding action.
3. Step Functions will orchestrate the process based on the user's choice, invoking either the Email Lambda or SMS Lambda function.
4. The selected Lambda function will send the personalized message to the user using the specified communication method (email or SMS).

## Contributing
Contributions to the project are welcome! If you would like to contribute, please check the Issues tab for existing issues or feature requests. If you find an issue or have an idea for a new feature, please create a new issue to discuss it.

To contribute to the project, follow these guidelines:

  1. Fork the repository and create a new branch for your contribution.
  2. Make your changes, ensuring that your code follows the project's coding style and guidelines.
  3. Commit your changes and push them to your forked repository.
  4. Submit a pull request, describing the changes you've made and referencing the corresponding issue.
Please note that all contributions are subject to review and approval. By contributing to this project, you agree to license your contributions under the MIT License.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Contact

If you have any questions, suggestions, or would like to know more about this project, please feel free to contact me at [clintonwambugu@gmail.com](mailto:clintonwambugu@gmail.com).

