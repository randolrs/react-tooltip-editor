const EditorInputsData = [
    {
        id: 'title',
        label: "Title",
        subLabel: "This is what your tooltip will say",
        defaultValue: 'Example Text',
        allowOtherInput: null,
        options: []
    },
    {
        id: 'position',
        label: "Position",
        subLabel: "This is where your tooltip will appear relative to the click area",
        defaultValue: 'top-left',
        allowOtherInput: false,
        options: [
            {
                'label': 'Top Left',
                'value': 'top-left'
            },
            {
                'label': 'Top Center',
                'value': 'top-center'
            },
            {
                'label': 'Top Right',
                'value': 'top-right'
            },
            {
                'label': 'Center Left',
                'value': 'center-left'
            },
            {
                'label': 'Center Center',
                'value': 'center-center'
            },
            {
                'label': 'Center Right',
                'value': 'center-right'
            },
            {
                'label': 'Bottom Left',
                'value': 'bottom-left'
            },
            {
                'label': 'Bottom Center',
                'value': 'bottom-center'
            },
            {
                'label': 'Bottom Right',
                'value': 'bottom-right'
            }
        ]
    },
    {
        id: 'delay',
        label: "Delay In",
        subLabel: "How long a user must hover over the target to activate the tooltip",
        defaultValue: 0.25,
        allowOtherInput: true,
        options: [
            {
                'label': 'Always Show',
                'value': 'always'
            },
            {
                'label': '0.25s',
                'value': 0.25
            },
            {
                'label': '0.5s',
                'value': 0.5
            },
            {
                'label': '1s',
                'value': 1
            }

        ]
    },
    {
        id: 'delayOut',
        label: "Delay Out",
        subLabel: "How long before the tooltip disappears after the user leaves the target",
        defaultValue: 0.25,
        allowOtherInput: true,
        options: [
            {
                'label': 'Always Show',
                'value': 'always'
            },
            {
                'label': '0.25s',
                'value': 0.25
            },
            {
                'label': '0.5s',
                'value': 0.5
            },
            {
                'label': '1s',
                'value': 1
            }

        ]
    },
];

export default EditorInputsData;