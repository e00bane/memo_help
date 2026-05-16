import { MemoLibrary } from "./memoLibrary.js";


function getDefaultFieldsetElement() {
    const element = document.createElement('p');
    element.textContent = 'context fieldset';
    return element;
}

function getContextList(contactKey) {
    let key = parseInt(contactKey);
    let contextKeysList = MemoLibrary.CONTACT_CONTEXT_LISTS[key] || [];

    // create and return a list of context texts instead of keys, and update the fieldset population to use those texts instead of keys. This will make the UI more user-friendly and less error-prone.
    let contextTextsList = [];
    for (const [contextKey, contextText] of Object.entries(MemoLibrary.CONTEXT_TEXTS)) {
        if (contextKeysList.includes(parseInt(contextKey))) {
            contextTextsList.push(contextText);
        }
    }
    console.log(`Retrieved context texts for contact ${contactKey}: ${contextTextsList.join(", ")}`);
    return contextTextsList;
}

function clearContextFieldset() {
    const fieldset = document.getElementById("ContextFieldset");
    fieldset.querySelectorAll("input[type='checkbox']").forEach(checkbox => checkbox.remove());
    fieldset.querySelectorAll("label").forEach(label => label.remove());
    fieldset.querySelectorAll("p").forEach(p => p.remove());
}

function initializeContextFieldset() {
    console.log('Initializing context fieldset with default state');

    const fieldset = document.getElementById("ContextFieldset");
    fieldset.querySelectorAll("legend").forEach(legend => legend.remove());
    fieldset.innerHTML = '';
    clearContextFieldset();

    let legend = document.createElement('legend');
    legend.textContent = 'Context:';
    legend.name = 'ContextLegend';
    legend.id = 'ContextCheckboxesLegend';
    fieldset.appendChild(legend);
    fieldset.appendChild(getDefaultFieldsetElement());
}

function populateContextFieldset(contactKey) {
    const fieldset = document.getElementById("ContextFieldset");

    let contextTextsList = getContextList(contactKey);
    console.log(`Populating context fieldset for contact ${contactKey} with contexts: ${contextTextsList.join(", ")}`);
    // Clear existing checkboxes
    clearContextFieldset();

    // Populate with new checkboxes
    contextTextsList.forEach((context, index) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `context${index}`;
        checkbox.name = "context";
        checkbox.value = context;

        const label = document.createElement("label");
        label.htmlFor = `context${index}`;
        label.textContent = context;

        fieldset.appendChild(checkbox);
        fieldset.appendChild(label);
        });

        if (contextTextsList.length === 0) {
            fieldset.appendChild(getDefaultFieldsetElement());
        }
}

export { populateContextFieldset, initializeContextFieldset };