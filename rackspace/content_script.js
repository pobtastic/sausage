walk(document.body);

function walk(node)
{
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch ( node.nodeType )
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child )
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode)
{
    var v = textNode.nodeValue;

    v = v.replace(/\brackspace/g, 'fatspace');
    v = v.replace(/\bRackspace/g, 'Fatspace');
    v = v.replace(/\bRACKSPACE/g, 'FATSPACE');

    v = v.replace(/\bracker/g, 'fatty');
    v = v.replace(/\bRacker/g, 'Fatty');
    v = v.replace(/\bRACKER/g, 'FATTY');

    v = v.replace(/\bfanatical/g, 'fantastical');
    v = v.replace(/\bFanatical/g, 'Fantastical');
    v = v.replace(/\bFANATICAL/g, 'FANTASTICAL');

    v = v.replace(/\bcloud/g, 'cake');
    v = v.replace(/\bCloud/g, 'Cake');
    v = v.replace(/\bCLOUD/g, 'CAKE');

    textNode.nodeValue = v;
}
