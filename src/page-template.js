const generateManagerInfo = data => {
    return `
    <section class="employee-container d-flex flex-column flex-md-row justify-content-md-center">
    ${data.map(employee => {
        return `
        <div class="employee-info m-3 p-3">
        <h3 class="employee-name">${employee.getName()}</h3>
        <p class="employee-title"><img class="title-icon" src="../src/images/manager_icon.svg">${employee.getRole()}</p>
        <div class="details m-3 px-5 py-2">
            <p><strong>ID: </strong>${employee.getId()}</p>
            <p><strong>Email: </strong><a href="mailto:example@example.com">${employee.getEmail()}</a></p>
            <p><strong>Office Number: </strong>${employee.getOfficeNumber()}</p>
        </div>
    </div>`}).join('')}
    </section>
    `
}

const generateEngineerInfo = data => {
    if (data.length === 0) {
        return ''
    } else {
        return `
    <section class="employee-container d-flex flex-column flex-md-row justify-content-md-center">
    ${data.map(employee => {
            return `
        <div class="employee-info m-3 p-3">
        <h3 class="employee-name">${employee.getName()}</h3>
        <p class="employee-title"><img class="title-icon" src="../src/images/engineer_icon.svg">${employee.getRole()}</p>
        <div class="details m-3 px-5 py-2">
            <p><strong>ID: </strong>${employee.getId()}</p>
            <p><strong>Email: </strong><a href="mailto:example@example.com">${employee.getEmail()}</a></p>
            <p><strong>GitHub: </strong><a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a></p>
        </div>
    </div>`}).join('')}
    </section>
    `
    };
};

const generateInternInfo = data => {
    if (data.length === 0) {
        return ''
    } else {
        return `
    <section class="employee-container d-flex flex-column flex-md-row justify-content-md-center">
    ${data.map(employee => {
        return `
        <div class="employee-info m-3 p-3">
        <h3 class="employee-name">${employee.getName()}</h3>
        <p class="employee-title"><img class="title-icon" src="../src/images/intern_icon.svg">${employee.getRole()}</p>
        <div class="details m-3 px-5 py-2">
            <p><strong>ID: </strong>${employee.getId()}</p>
            <p><strong>Email: </strong><a href="mailto:example@example.com">${employee.getEmail()}</a></p>
            <p><strong>School: </strong>${employee.getSchool()}</a></p>
        </div>
    </div>`}).join('')}
    </section>
    `
    };
};

const generatePage = employeeData => {
    return `<!DOCTYPE html >
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css2?family=IM+Fell+DW+Pica&family=Rock+Salt&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>Team Portfolio</title>
</head>
<body>
<header>
    <h1>My Team</h1>
    <img class="head-icon" src="../src/images/groups_icon.svg">
</header>

<main id="employee-container container-fluid">
${generateManagerInfo(employeeData.managers)}
${generateEngineerInfo(employeeData.engineers)}
${generateInternInfo(employeeData.interns)}
</main>
<footer>
    &copy 2022 by <span>Shu Yang</span>
</footer>
</body>
</html>
`
}

module.exports = generatePage;
