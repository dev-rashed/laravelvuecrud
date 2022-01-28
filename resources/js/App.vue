<template>
    <div class="container">
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link to="/products" class="nav-link"
                        >Products</router-link
                    >
                    <router-link to="/products/create" class="nav-link"
                        >Create</router-link
                    >
                </div>
            </div>
        </nav>
        <div class="mt-3">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // izitoast
            notificationSystem: {
                options: {
                    show: {
                        theme: "dark",
                        icon: "icon-person",
                        position: "bottomRight",
                        progressBarColor: "rgb(0, 255, 184)",
                        buttons: [
                            [
                                "<button>Ok</button>",
                                function (instance, toast) {
                                    alert("Hello world!");
                                },
                                true,
                            ],
                            [
                                "<button>Close</button>",
                                function (instance, toast) {
                                    instance.hide(
                                        {
                                            transitionOut: "fadeOutUp",
                                            onClosing: function (
                                                instance,
                                                toast,
                                                closedBy
                                            ) {
                                                console.info(
                                                    "closedBy: " + closedBy
                                                );
                                            },
                                        },
                                        toast,
                                        "buttonName"
                                    );
                                },
                            ],
                        ],
                        onOpening: function (instance, toast) {
                            console.info("callback abriu!");
                        },
                        onClosing: function (instance, toast, closedBy) {
                            console.info("closedBy: " + closedBy);
                        },
                    },
                    question: {
                        timeout: 20000,
                        close: false,
                        overlay: true,
                        toastOnce: true,
                        id: "question",
                        zindex: 999,
                        position: "center",
                        buttons: [
                            [
                                "<button><b>YES</b></button>",
                                function (instance, toast) {
                                    instance.hide(
                                        { transitionOut: "fadeOut" },
                                        toast,
                                        "button"
                                    );
                                },
                                true,
                            ],
                            [
                                "<button>NO</button>",
                                function (instance, toast) {
                                    instance.hide(
                                        { transitionOut: "fadeOut" },
                                        toast,
                                        "button"
                                    );
                                },
                            ],
                        ],
                        onClosing: function (instance, toast, closedBy) {
                            console.info("Closing | closedBy: " + closedBy);
                        },
                        onClosed: function (instance, toast, closedBy) {
                            console.info("Closed | closedBy: " + closedBy);
                        },
                    },
                },
            },
            // izitoast end
        };
    },
};
</script>
