def flatten_dictionary(dictionary):
    def flatten_dictionary_helper(initial_key, nested_dict, flat_dict):
        for key, value in nested_dict.items():
            if initial_key and key:
                new_key = f"{initial_key}.{key}"
            elif initial_key:
                new_key = initial_key
            else:
                new_key = key

            if not isinstance(value, dict):
                flat_dict[new_key] = value
            else:
                flatten_dictionary_helper(new_key, value, flat_dict)

    flat_dictionary = {}
    flatten_dictionary_helper("", dictionary, flat_dictionary)
    return flat_dictionary

