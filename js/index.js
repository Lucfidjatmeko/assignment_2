function handleSubmit(event) {
    event.preventDefault()    
    
    const valueNameUser = document.getElementById("name-user").value
    console.log(valueNameUser);

    const fullNameUser = document.getElementById("fullname-user").innerHTML = valueNameUser
    console.log(fullNameUser);

    const valueRoleUser = document.getElementById("role-user").value
    document.getElementById("role").innerHTML = valueRoleUser

    const valueAvailabilityUser = document.getElementById("availability-user").value
    document.getElementById("availability").innerHTML = ": " + valueAvailabilityUser

    const valueAgeUser = document.getElementById("age-user").value
    document.getElementById("usia").innerHTML = ": " + valueAgeUser

    const valueLocationUser = document.getElementById("location-user").value
    document.getElementById("lokasi").innerHTML = ": " + valueLocationUser

    const valueExperienceUser = document.getElementById("experience-user").value
    document.getElementById("pengalaman").innerHTML = ": " + valueExperienceUser

    const valueEmailUser = document.getElementById("email-user").value
    document.getElementById("email").innerHTML = ": " + valueEmailUser

    document.getElementById("myform").reset()
}