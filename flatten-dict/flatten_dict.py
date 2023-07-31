def flatten_dict(input_dict, parent_key="", sep="."):
    """
    flatten_dict takes in a dictionary and returns a flatten version

    >>> flatten_dict({"key1":1, "key2":{"a":2}})
    {'key1': 1, 'key2.a': 2}
    """
    items = {}
    for key in input_dict:
        new_key = f"{parent_key}{sep}{key}" if parent_key else key
        if type(input_dict[key])== dict:
            items.update(flatten_dict(input_dict[key], new_key, sep=sep))
        else:
            items[new_key] = input_dict[key]
    return items
