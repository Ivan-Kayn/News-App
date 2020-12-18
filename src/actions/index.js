const itemsLoaded = (newMenu) => {
    return {
        type: 'ITEMS_LOADED',
        payload: newMenu
    };
};

export {
    itemsLoaded
};