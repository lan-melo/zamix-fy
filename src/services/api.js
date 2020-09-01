export function loadLists() {
    return [
        {
            title: 'Em Andamento',
            creatable: true,
            cards: [
                {
                    id: 1,
                    content: 'Janela de Manutenção PROJETO FTTH/BPI-00012',
                    labels: ['#7159c1'],
                   
                },
                {
                    id: 2,
                    content: 'ROMPIMENTO MANGARATIBA X VILARICA',
                    labels: ['#7159c1'],
                    
                },
                {
                    id: 3,
                    content: 'Janela de Manutenção PROJ-RSD-00028 (GOLDENRS X BASEITATIAIA)',
                    labels: ['#7159c1'],
                   
                },
                {
                    id: 4,
                    content: 'VRE/L1-00140, 141 e 143 S8',
                    labels: ['#54e1f7'],
                    
                },
                {
                    id: 5,
                    content: 'Migração de Clientes para liberação cabo Backbone (TRÊS POÇOS)',
                    labels: ['#54e1f7'],
                    
                },
            ]
        },
        {
            title: 'Em Espera',
            creatable: false,
            cards: [
                {
                    id: 6,
                    content: 'Travamento IPTV',
                    labels: [],
                    
                }
            ]
        },
        {
            title: 'Viabilidade',
            creatable: false,
            cards: [
                {
                    id: 7,
                    content: 'S.O. DO BRASIL TELECOMUNICACOES LTDA - EPP',
                    labels: ['#7159c1'],
                    
                },
                {
                    id: 8,
                    content: 'S.O. DO BRASIL TELECOMUNICACOES LTDA - EPP',
                    labels: ['#54e1f7'],
                    
                },
                {
                    id: 9,
                    content: 'S.O. DO BRASIL TELECOMUNICACOES LTDA - EPP',
                    labels: [],
                }
            ]
        },
        {
            title: 'Concluído',
            creatable: false,
            done: true,
            cards: [
                {
                    id: 10,
                    content: 'VL - GER. FONTE PHB ESTAÇÃO VALENÇA',
                    labels: [],
                },
                {
                    id: 12,
                    content: 'ANG - GER. FONTE PHB ESTAÇÃO PONTA LESTE',
                    labels: ['#54e1f7'],
                },
                {
                    id: 13,
                    content: 'VRD - GER. FONTE PHB ESTAÇÃO CRBOSQUE',
                    labels: ['#7159c1'],
                }
            ]
        },
    ];
}