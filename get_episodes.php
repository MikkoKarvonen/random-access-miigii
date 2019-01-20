<script>
    episodes = []
    <?php
    $rss = new DOMDocument();
    $rss->load("http://feeds.soundcloud.com/users/soundcloud:users:152277214/sounds.rss");

    $xpath = new DOMXpath($rss);
    $xpath->registerNamespace('xc', 'urn:ietf:params:xml:ns:xcal');
    $xpath2 = new DOMXpath($rss);
    $xpath2->registerNamespace('itunes', 'http://feeds.soundcloud.com/users/soundcloud:users:152277214/sounds.rss');
    $i = 0;
    foreach($xpath->evaluate("//item") as $item) {
        ?>
            episodes.push({
                id: <?php echo $i;?>,
                title: "<?php echo $xpath->evaluate('string(title)', $item);?>",
                description: "<?php echo $xpath->evaluate('string(description)', $item);?>",
                date: "<?php echo $xpath->evaluate('string(pubDate)', $item);?>",
                link: "<?php echo $xpath->evaluate('string(link)', $item);?>",
                guid: "<?php echo $xpath->evaluate('string(guid)', $item);?>".split('tracks/')[1],
                })
        <?php
        $i++;
    }
    ?>
    episodeImages = []
    <?php
    $query='//item/itunes:image';
    $col=$xpath2->query( $query );
    if( $col->length > 0 ){
        foreach( $col as $node ){
        ?>
            episodeImages.push("<?php echo $node->getAttribute('href');?>");
        <?php
        }
    }
    ;?>
</script>