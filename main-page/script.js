let currentStep = 0;
let noSelectionCount = 0;

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentStep === 0) {
        // Show the h2 element inside the body-section
        document.getElementById('questionSection').style.display = 'block';
        currentStep++;
    } else if (currentStep === 1) {
        // Show the first divider and question1
        document.getElementById('divider0').style.display = 'block';
        document.getElementById('question1').style.display = 'block';
        currentStep++;
    } else if (validateCurrentStep()) {
        if (isNoSelected()) {
            noSelectionCount++;
            if (noSelectionCount > 2) {
                disableNoRadios();
            }
            resetToH2();
        } else {
            currentStep++;
            showNextStep();
        }
    } else {
        alert('Please select an answer before proceeding.');
    }
});

function validateCurrentStep() {
    const sections = ['question1', 'question2', 'question3'];
    if (currentStep > 1 && currentStep <= sections.length + 2) {
        const radios = document.getElementById(sections[currentStep - 2]).querySelectorAll('input[type="radio"]');
        return Array.from(radios).some(radio => radio.checked);
    }
    return true;
}

function isNoSelected() {
    const sections = ['question1', 'question2', 'question3'];
    if (currentStep > 1 && currentStep <= sections.length + 2) {
        const radios = document.getElementById(sections[currentStep - 2]).querySelectorAll('input[type="radio"]');
        return Array.from(radios).some(radio => radio.checked && radio.value === "no");
    }
    return false;
}

function showNextStep() {
    const stepPairs = [
        ['divider1', 'question2'],
        ['divider2', 'question3']
    ];

    if (currentStep <= stepPairs.length + 2) {
        stepPairs[currentStep - 3].forEach(section => {
            document.getElementById(section).style.display = 'block';
        });
    } else if (currentStep === stepPairs.length + 3) {
        window.location.href = '../second-page/index.html';
    }
}

function resetToH2() {
    currentStep = 1;
    const sections = [
        'divider0', 'question1',
        'divider1', 'question2',
        'divider2', 'question3'
    ];
    sections.forEach(section => {
        document.getElementById(section).style.display = 'none';
    });
    // Clear all radio button selections
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.checked = false;
    });
}

function disableNoRadios() {
    document.querySelectorAll('input[type="radio"][value="no"]').forEach(radio => {
        radio.disabled = true;
    });
}
